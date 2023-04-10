import React from 'react';

import BaseLayout from '@layouts/BaseLayout';
import { HeadFC } from 'gatsby';
import Seo from '@components/Seo/Seo';
import ContactForm from '@components/contacts/ContactForm';

const Contact = () => {
  return (
    <BaseLayout>
      <ContactForm />
    </BaseLayout>
  );
};

export default Contact;

export const Head: HeadFC = () => <Seo title="Index - Frontzilla" />