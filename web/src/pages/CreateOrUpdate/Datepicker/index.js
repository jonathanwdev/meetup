/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO, setHours, endOfDay, startOfDay } from 'date-fns';
import { useField } from '@rocketseat/unform';
import DatePicker, { registerLocale } from 'react-datepicker';
import './styles.css';

import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt';

export default function Datepicker({ name }) {
  const { fieldName, registerField, defaultValue } = useField(name);
  const [newDate, setNewDate] = useState(
    defaultValue ? parseISO(defaultValue) : ''
  );
  const [newTime, setNewTime] = useState(
    defaultValue
      ? format(parseISO(defaultValue), 'yyyy-M-dd') ===
          format(new Date(), 'yyyy-M-dd')
      : true
  );

  const ref = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]);

  registerLocale('pt', pt);
  return (
    <DatePicker
      minTime={
        newTime
          ? setHours(new Date(), new Date().getHours() + 1)
          : startOfDay(new Date())
      }
      maxTime={endOfDay(new Date())}
      onSelect={select =>
        setNewTime(
          format(select, 'yyyy-M-dd') === format(new Date(), 'yyyy-M-dd')
        )
      }
      selected={newDate}
      id="date"
      ref={ref}
      placeholderText="Data do evento"
      timeCaption="Time"
      timeIntervals={60}
      onChange={date => setNewDate(date)}
      minDate={new Date()}
      showTimeSelect
      locale="pt"
      dateFormat=" d 'de' MMMM 'de' yyyy, 'às' HH:mm'h'"
    />
  );
}
//
Datepicker.propTypes = {
  name: PropTypes.string.isRequired,
};
