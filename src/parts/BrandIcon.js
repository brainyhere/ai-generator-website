/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <img className="w-24" src="assets/images/logo/logo.png" alt="logo" />
    </Button>
  );
}
