// TODO: Gulp task to select locale file from src/locales
// based on build > deployment parameter

export default {
  // Set two letter language code
  'en': {
    texts: {
      // Set default (greeting), card and thanks messages
      default: 'RiskMap bot helps you report flooding in realtime. '
        + 'Send /flood to report. In life-threatening situations call 911.',
      card: 'Please report using this one-time link ',
      thanks: 'Thank you for your report. You can access it using this link ',
    },
  },
};
