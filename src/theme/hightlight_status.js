const hexToRgba = require('hex-to-rgba');
const {
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
  BsExclamationTriangleFill,
  BsMegaphoneFill,
} = require('react-icons/bs');

module.exports = {
  name: 'Hightlight status',
  themeHightlightStatus: {
    realizes: {
      style: {
        iconColor: '#32c832',
        bgColor: hexToRgba('#32c832', 0.05),
      },
      icon: <BsFillHandThumbsUpFill />,
      label: 'Réalisés',
    },
    difficults: {
      style: {
        iconColor: '#cd3c14',
        bgColor: hexToRgba('#cd3c14', 0.05),
      },
      icon: <BsFillHandThumbsDownFill />,
      label: 'Difficultés',
    },
    challenges: {
      style: {
        iconColor: '#fccc54',
        bgColor: hexToRgba('#fccc54', 0.05),
      },
      icon: <BsExclamationTriangleFill />,
      label: 'Enjeux',
    },
    coordinationPoint: {
      style: {
        iconColor: '#34a4ec',
        bgColor: hexToRgba('#34a4ec', 0.05),
      },
      icon: <BsMegaphoneFill />,
      label: 'Point de coordination',
    },
    carePoint: {
      style: {
        iconColor: '#9c64fc',
        bgColor: hexToRgba('#9c64fc', 0.05),
      },
      icon: <BsMegaphoneFill />,
      label: "Point d'attention ",
    },
    challengeInProgress: {
      style: {
        iconColor: '#4cc4c4',
        bgColor: hexToRgba('#4cc4c4', 0.05),
      },
      icon: <BsMegaphoneFill />,
      label: 'Challenge en cours',
    },
  },
};
