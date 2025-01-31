import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders the Header component', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the desktop logo on larger screens', () => {
    render(<Header />);
    const desktopLogo = screen.getByTestId('desktop-logo');
    expect(desktopLogo).toBeInTheDocument();
    expect(desktopLogo).toHaveClass('hidden');
  });

  it('renders the mobile logo on smaller screens', () => {
    render(<Header />);
    const mobileLogo = screen.getByTestId('mobile-logo');
    expect(mobileLogo).toBeInTheDocument();
    expect(mobileLogo).toHaveClass('sm:hidden');
  });

  it('renders the blog section on larger screens', () => {
    render(<Header />);
    const blogSectionParent = screen
      .getByText('BLOG')
      .closest('.hidden.sm\\:block');
    expect(blogSectionParent).toBeInTheDocument();
    expect(blogSectionParent).toHaveClass('hidden');
    expect(blogSectionParent).toHaveClass('sm:block');
  });

  it('does not render the blog section on smaller screens', () => {
    render(<Header />);
    const blogSectionParent = screen
      .getByText('BLOG')
      .closest('.hidden.sm\\:block');
    expect(blogSectionParent).toBeInTheDocument();
    expect(blogSectionParent).toHaveClass('hidden');
  });
});
