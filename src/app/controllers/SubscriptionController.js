import { isBefore, startOfHour } from 'date-fns';
import { Op } from 'sequelize';
import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';

class SubscriptionController {
  async index(req, res) {
    const currentDate = new Date();

    const subscriptions = await Subscription.findAll({
      where: { user_id: req.userId },
      include: [
        {
          model: Meetup,
          where: {
            date: {
              [Op.gt]: currentDate,
            },
          },
        },
      ],
      order: [[Meetup, 'date']],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const meetup = await Meetup.findByPk(req.params.meetup_id);

    const hourStart = startOfHour(meetup.date);

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permited' });
    }
    if (meetup.user_id === req.userId) {
      return res
        .status(401)
        .json({ error: "You can't subscribe in your own event " });
    }
    const checkTime = await Subscription.findOne({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          required: true,
          where: {
            date: meetup.date,
          },
        },
      ],
    });
    if (checkTime) {
      return res
        .status(401)
        .json({ error: ' You already have a meetup at the same time`' });
    }
    const subscriptions = await Subscription.create({
      user_id: req.userId,
      meetup_id: meetup.id,
    });

    return res.json(subscriptions);
  }
}

export default new SubscriptionController();
