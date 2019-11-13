import Meetup from '../models/Meetup';
import File from '../models/File';

class ListController {
  async index(req, res) {
    const meetup = await Meetup.findAll({ where: { user_id: req.userId } });

    return res.json(meetup);
  }

  async show(req, res) {
    const meetup = await Meetup.findByPk(req.params.id, {
      include: [
        {
          model: File,
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!meetup) {
      return res.status(400).json({ error: ' Meetup does not exists' });
    }
    const { title, description, location, date, banner } = meetup;
    return res.json(meetup);
  }
}

export default new ListController();
