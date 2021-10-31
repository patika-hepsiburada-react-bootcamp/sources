import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Calculator from './index';

it('Inputlara girilen sayısal değerleri çarpıp sonuç etiketinde göstermelidir.', () => {
  let number1_input, number2_input, submit_btn;

  render(<Calculator />);

  number1_input = screen.getByTestId('number1');
  number2_input = screen.getByTestId('number2');
  submit_btn = screen.getByTestId('submit-btn');

  userEvent.type(number1_input, 4);
  userEvent.type(number2_input, 4);

  userEvent.click(submit_btn);

  setTimeout(() => {
    expect(screen.getByTestId('result')).toHaveTextContent(16);
  });
});
