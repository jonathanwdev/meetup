import Mail from '../../lib/Mail';

class SubscriptionMail {
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { meetup, user } = data;

    await Mail.sendMail({
      to: `${meetup.User.name} <${meetup.User.email}>`,
      subject: 'Nova inscrição',
      template: 'subscription',
      context: {
        meetOwner: meetup.User.name,
        user: user.name,
        meetupTitle: meetup.title,
      },
    });
  }
}

export default new SubscriptionMail();
