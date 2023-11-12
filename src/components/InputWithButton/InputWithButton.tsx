import React, { useState } from 'react';
import { TextInput, TextInputProps, ActionIcon, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

export function InputWithButton(props: TextInputProps) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
     setSearchText(event.target.value);
  };

  return (
    <TextInput
      radius="xl"
      size="xl"
      placeholder="Search courses"
      rightSectionWidth={60}
      style={{ width: rem(500) }}
      leftSection={<IconSearch style={{ width: rem(24), height: rem(24) }} stroke={1.5} />}
      rightSection={
        <ActionIcon size={40} radius="xl" variant="filled">
          <IconArrowRight style={{ width: rem(36), height: rem(36) }} stroke={1.5} />
        </ActionIcon>
      }
      value={searchText}
      onChange={handleInputChange}
      {...props}
    />
  );
}