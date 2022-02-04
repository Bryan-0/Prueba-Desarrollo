import customersFeedback from '../../../public/customersFeedback.json';

export default function handler(req, res) {
  res.status(200).json(customersFeedback);
}
