import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, isAfter, subDays } from 'date-fns';
import Meetup from '../models/Meetup';
import User from '../models/User';

class MeetUpController {
  async index(req, res) {
    const meetup = await Meetup.findAll({ where: { user_id: req.userId } });

    return res.json(meetup);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      banner: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const { title, description, location, date, banner } = req.body;

    const hourStar = startOfHour(parseISO(date));

    if (isBefore(hourStar, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permited' });
    }
    const checkAvailability = await Meetup.findOne({
      where: {
        user_id: req.userId,
        date,
      },
    });
    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: `You already have a meetup at ${req.body.date}` });
    }

    const meetup = await Meetup.create({
      title,
      user_id: req.userId,
      description,
      location,
      date,
      banner,
    });
    return res.json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      banner: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const meetup = await Meetup.findByPk(req.params.id);
    const user_id = req.userId;

    if (meetup.user_id !== user_id) {
      return res
        .status(401)
        .json({ error: 'You can only update your meetups' });
    }
    const { date } = req.body;
    const hourStar = startOfHour(parseISO(date));

    if (isAfter(hourStar, new Date())) {
      const updatedMeetup = await meetup.update(req.body);
      return res.json(updatedMeetup);
    }
    return res.status(401).json({ error: 'Invalid date' });
  }

  async delete(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);
    const user_id = req.userId;
    if (meetup.user_id !== user_id) {
      return res
        .status(401)
        .json({ error: 'You can only delete your meetups' });
    }

    const dateSub = subDays(meetup.date, 1);
    if (isBefore(dateSub, new Date())) {
      return res
        .status(401)
        .json({ error: ' You can only cancel a meetup 24 hours before' });
    }
    await meetup.destroy();
    return res.send();
  }
}

export default new MeetUpController();
