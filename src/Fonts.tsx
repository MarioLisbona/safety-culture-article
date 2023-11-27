import { Global } from "@emotion/react";

export default function Fonts() {
  return (
    <Global
      styles={`
    @font-face {
      font-family: 'NotoSans';
      src: local('NotoSans Medium'), local('NotoSans-Medium'),
          url('/fonts/NotoSans-Medium.ttf') format('truetype');
      font-weight: medium;
      font-style: normal;
  }
    @font-face {
      font-family: 'Poppins';
      src: local('Poppins Medium'), local('Poppins-Medium'),
          url('/fonts/Poppins-Medium.ttf') format('truetype');
      font-weight: medium;
      font-style: normal;
  }
    `}
    />
  );
}
