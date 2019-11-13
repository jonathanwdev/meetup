import Meetup from '../models/Meetup';

class ListController {
  async index(req, res) {
    const meetup = await Meetup.findAll({ where: { user_id: req.userId } });

    return res.json(meetup);
  }

  async show(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);
    if (!meetup) {
      return res.status(400).json({ error: ' Meetup does not exists' });
    }
    return res.json(meetup);
  }
}

export default new ListController();
