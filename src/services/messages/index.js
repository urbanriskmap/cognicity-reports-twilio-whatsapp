// TODO: Gulp task to select locale file from src/locales
// based on build parameter
import message from './locale';

const messages = {};
messages[message.language] = message.body;

export messages;
