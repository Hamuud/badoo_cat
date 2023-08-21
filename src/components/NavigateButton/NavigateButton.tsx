import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import classes from './NavigateButton.module.scss';

type Props = {
  url: string;
  title: string;
  img: string;
  backgroundColor: string;
  borderColor?: string;
  count?: string;
};

const NavigateButton: React.FC<Props> = ({
  title,
  img,
  backgroundColor,
  borderColor,
  url,
  count,
}) => {
  // eslint-disable-next-line no-console
  console.log(url, borderColor);

  return (
    <div className={classes.container}>
      <Link to={url} className={classes.link}>
        <div style={{ backgroundColor }} className={cn(classes.button, `button__${count}`)}>
          <img
            className={classes.img_button}
            src={img}
            alt={`${title}`}
          />
        </div>
        <div className={classes.button_body}>
          <p className={classes.button_text}>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default NavigateButton;
