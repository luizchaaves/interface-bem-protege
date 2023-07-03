interface Props {
  size: number;
}

const Satelite = ({ size }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.5 13.4062C39.4688 12.9375 38.3437 13.0312 37.3125 13.4062C36.2812 13.875 35.5313 14.625 35.1562 15.5625L28.5 12.375L25.2187 4.6875C25.125 4.5 24.9375 4.3125 24.75 4.21875C24.5625 4.125 24.2813 4.125 24 4.21875C15.0938 7.96875 10.875 18.2813 14.7187 27.2813C15.5625 29.1563 16.5938 30.8438 18 32.3438V39.375C14.3438 40.875 11.8125 44.1563 11.5313 47.8125H11.25C8.625 47.8125 6.5625 49.875 6.5625 52.5V56.25C6.5625 56.8125 6.9375 57.1875 7.5 57.1875H37.5C38.0625 57.1875 38.4375 56.8125 38.4375 56.25V52.5C38.4375 49.875 36.375 47.8125 33.75 47.8125H33.6563C33.2813 44.1563 30.8438 40.9688 27.1875 39.375V37.5937C28.3125 37.875 29.5313 37.9688 30.6563 37.9688C33 37.9688 35.3438 37.5 37.5 36.5625C37.9688 36.375 38.1563 35.8125 37.9688 35.3438L34.6875 27.6563L37.125 21.1875C37.125 21.1875 37.2188 21.1875 37.2188 21.2813C37.6875 21.4688 38.25 21.5625 38.8125 21.5625C39.375 21.5625 39.9375 21.4688 40.5 21.1875C42.6563 20.25 43.6875 17.8125 42.75 15.6563C42.375 14.625 41.5313 13.875 40.5 13.4062ZM19.6875 26.25C19.6875 24.6563 20.9062 23.4375 22.5 23.4375C24.0938 23.4375 25.3125 24.6563 25.3125 26.25V42.1875C25.3125 43.7813 24.0938 45 22.5 45C20.9062 45 19.6875 43.7813 19.6875 42.1875V26.25ZM36.5625 52.5V55.3125H8.4375V52.5C8.4375 50.9063 9.65625 49.6875 11.25 49.6875H33.75C35.3438 49.6875 36.5625 50.9063 36.5625 52.5ZM31.7813 47.8125H13.2188C13.5 45.0938 15.2812 42.75 17.8125 41.4375V42.1875C17.8125 44.8125 19.875 46.875 22.5 46.875C25.125 46.875 27.1875 44.8125 27.1875 42.1875V41.4375C29.8125 42.75 31.5 45.0938 31.7813 47.8125ZM27.1875 35.7187V26.25C27.1875 23.625 25.125 21.5625 22.5 21.5625C19.875 21.5625 17.8125 23.625 17.8125 26.25V29.3438C17.25 28.5 16.6875 27.5625 16.2187 26.5312C12.9375 18.8438 16.3125 10.0313 23.7187 6.375L26.7188 13.5L32.8125 28.0313L35.8125 35.1563C33.0938 36.1875 30.0937 36.375 27.1875 35.7187ZM29.4375 15.0938L34.6875 17.5313C34.6875 18 34.7812 18.4688 34.9687 18.9375C35.1562 19.3125 35.3437 19.6875 35.625 19.9688L33.75 25.125L29.4375 15.0938ZM39.8438 19.5C39.2812 19.7813 38.625 19.7813 38.0625 19.5C37.5 19.2187 37.0313 18.8437 36.75 18.2812C36.2813 17.0625 36.8437 15.75 37.9688 15.1875C38.25 15.0938 38.5312 15 38.9062 15C39.1875 15 39.4688 15.0938 39.75 15.1875C40.3125 15.4688 40.7812 15.8437 41.0625 16.4062C41.5312 17.625 40.9688 19.0312 39.8438 19.5Z"
        fill="#114880"
      />
      <path
        d="M40.7813 9.56244C40.3125 9.46869 39.75 9.74994 39.6563 10.3124C39.5625 10.7812 39.8438 11.3437 40.4063 11.4374C42.1875 11.8124 43.5938 13.0312 44.3438 14.7187C45.0938 16.4062 44.9063 18.2812 43.9688 19.7812C43.6875 20.2499 43.7813 20.8124 44.25 21.0937C44.4375 21.1874 44.625 21.2812 44.7188 21.2812C45 21.2812 45.375 21.0937 45.4688 20.8124C46.7813 18.7499 46.9688 16.2187 46.0313 13.9687C45.0938 11.7187 43.125 10.0312 40.7813 9.56244Z"
        fill="#114880"
      />
      <path
        d="M42.1875 6.1874C41.7188 6.09365 41.1563 6.3749 41.0625 6.84365C40.9688 7.3124 41.25 7.8749 41.7188 7.96865C44.3438 8.71865 46.5 10.5936 47.625 13.2186C48.75 15.8436 48.6563 18.7499 47.25 21.1874C46.9688 21.6561 47.1563 22.2186 47.625 22.4999C47.8125 22.5936 47.9063 22.5936 48.0938 22.5936C48.4688 22.5936 48.75 22.4061 48.9375 22.1249C50.5313 19.2186 50.7188 15.7499 49.3125 12.5624C48 9.3749 45.375 7.1249 42.1875 6.1874Z"
        fill="#114880"
      />
      <path
        d="M52.5 11.1561C50.8125 7.12489 47.5313 4.12489 43.4063 2.81239C42.9375 2.62489 42.375 2.90614 42.1875 3.37489C42 3.84364 42.2813 4.40614 42.75 4.59364C46.3125 5.71864 49.2188 8.43739 50.625 11.9061C52.125 15.3749 52.0313 19.3124 50.3438 22.6874C50.1563 23.1561 50.3438 23.7186 50.8125 23.9061C50.9063 23.9999 51.0938 23.9999 51.1875 23.9999C51.5625 23.9999 51.8438 23.8124 52.0313 23.4374C54.0938 19.6874 54.1875 15.1874 52.5 11.1561Z"
        fill="#114880"
      />
    </svg>
  );
};

export default Satelite;
