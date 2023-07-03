interface Props {
  size: number;
}

const Arrow = ({ size }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.7075 12.7076L16.7075 22.7076C16.6146 22.8005 16.5043 22.8743 16.3829 22.9246C16.2615 22.975 16.1314 23.0009 16 23.0009C15.8686 23.0009 15.7385 22.975 15.6171 22.9246C15.4957 22.8743 15.3854 22.8005 15.2925 22.7076L5.29251 12.7076C5.10487 12.5199 4.99945 12.2654 4.99945 12.0001C4.99945 11.7347 5.10487 11.4802 5.29251 11.2926C5.48015 11.1049 5.73464 10.9995 6.00001 10.9995C6.26537 10.9995 6.51987 11.1049 6.70751 11.2926L16 20.5863L25.2925 11.2926C25.3854 11.1997 25.4957 11.126 25.6171 11.0757C25.7385 11.0254 25.8686 10.9995 26 10.9995C26.1314 10.9995 26.2615 11.0254 26.3829 11.0757C26.5043 11.126 26.6146 11.1997 26.7075 11.2926C26.8004 11.3855 26.8741 11.4958 26.9244 11.6172C26.9747 11.7386 27.0006 11.8687 27.0006 12.0001C27.0006 12.1315 26.9747 12.2616 26.9244 12.383C26.8741 12.5044 26.8004 12.6147 26.7075 12.7076Z"
        fill="#114880"
      />
    </svg>
  );
};

export default Arrow;