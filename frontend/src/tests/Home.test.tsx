import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../pages/Home';

const renderApp = () => {
  render(<Home />);

  return { user: userEvent.setup() };
};

describe('Home page', () => {
  it('should render the elements on the Home page', async () => {
    renderApp();

    expect(
      await screen.findByText(
        /We offer a range of products to support your business/i
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /We offer a range of services to support your business/i
      )
    ).toBeVisible();
    expect(
      await screen.findByText(
        /We offer a range of pricing plans to suit everyone/i
      )
    ).toBeVisible();
    expect(
      await screen.findByText(
        /We help software developers learn new skills, gain more experience and create excellent applications/i
      )
    ).toBeVisible();
    expect(
      await screen.findByText(/We would love to hear from you/i)
    ).toBeVisible();
  });
});
