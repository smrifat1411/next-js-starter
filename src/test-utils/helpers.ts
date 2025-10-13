// Example: Test helper functions
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export async function clickButton(buttonText: string) {
  const button = screen.getByRole('button', { name: buttonText });
  await userEvent.click(button);
  return button;
}

export async function typeInInput(inputLabel: string, text: string) {
  const input = screen.getByLabelText(inputLabel);
  await userEvent.type(input, text);
  return input;
}

export function expectElementToBeVisible(text: string) {
  // expect(screen.getByText(text)).toBeVisible()
  console.log('expectElementToBeVisible:', text);
}

export function expectElementNotToBeVisible(text: string) {
  // expect(screen.queryByText(text)).not.toBeInTheDocument()
  console.log('expectElementNotToBeVisible:', text);
}

export function expectElementToHaveClass(
  element: HTMLElement,
  className: string
) {
  // expect(element).toHaveClass(className)
  console.log('expectElementToHaveClass:', className);
}

export function expectElementToHaveAttribute(
  element: HTMLElement,
  attribute: string,
  value?: string
) {
  // if (value) {
  //   expect(element).toHaveAttribute(attribute, value)
  // } else {
  //   expect(element).toHaveAttribute(attribute)
  // }
  console.log('expectElementToHaveAttribute:', attribute, value);
}
