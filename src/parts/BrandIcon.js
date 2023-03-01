/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';
import PropTypes from 'prop-types';

export default function BrandIcon({ size = "large"} = {size: "small" | "large"}) {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <img className={size === "large" ? "w-36" : "w-28"} src="assets/images/logo/logo-black.png" alt="logo" />
    </Button>
  );
}

BrandIcon.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
};

BrandIcon.defaultProps = {
    size: "large",
};
