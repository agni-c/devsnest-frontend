import axios from '../config/axios.config';
import getDiscordId from '../utils/getDiscordId';
import { API_ENDPOINTS } from '../constants/api';

function submitQuestion({ question_unique_id, status }) {
  const discord_id = getDiscordId();

  if (!discord_id) throw new Error('discord id not found');

  const res = axios.post(API_ENDPOINTS.SUBMISSIONS, {
    data: {
      attributes: {
        discord_id,
        question_unique_id,
        status,
      },
      type: 'submissions',
    },
  });

  return res;
}

export { submitQuestion };
