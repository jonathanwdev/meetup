import * as Yup from 'yup';
import {
  startOfHour,
  parseISO,
  isBefore,
  isAfter,
  subDays,
  startOfDay,
  endOfDay,
} from 'date-fns';

import { Op } from 'sequelize';
import Meetup from '../models/Meetup';
import User from '../models/User';

class MeetUpController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const { date } = req.query;
    const parsedDate = parseISO(date);

    const meetup = await Meetup.findAll({
      where: {
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      order: ['date'],
      attributes: ['id', 'title', 'description', 'location', 'date'],
      limit: 10,
      offset: (page - 1) * 10,

      include: [
        {
          model: User,
          attributes: ['id', 'name', 'email'],
        },
      ],
    });
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

    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
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
        .json({ error: `You already have a meetup at ${hourStart}` });
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
        .json({ error: 'You can only update your own meetups' });
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
        .json({ error: 'You can only delete your own meetups' });
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
