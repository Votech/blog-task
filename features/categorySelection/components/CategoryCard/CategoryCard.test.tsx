import { CATEGORY } from '@/lib/constants';
import resolveColors from '@/lib/utils/resolveColors';
import { render } from '@testing-library/react';
import resolveIcon from '../../utils/resolveIcon';
import CategoryCard from './CategoryCard';

jest.mock('@/lib/utils/resolveColors', () => jest.fn());
jest.mock('../../utils/resolveIcon', () => jest.fn());

const mockOnSelectCategory = jest.fn();
const mockCategory = CATEGORY.knowledge;
const mockColors = {
  background: 'bg-category-blue',
  borderColor: 'border-category-blue-dark',
  textColor: 'text-white',
  highlightColor: 'text-category-blue',
};
const MockIcon = () => <svg data-testid="mock-icon" />;

describe('CategoryCard Snapshot', () => {
  beforeEach(() => {
    (resolveColors as jest.Mock).mockReturnValue(mockColors);
    (resolveIcon as jest.Mock).mockReturnValue(MockIcon);
  });

  it('matches snapshot when selected is false', () => {
    const { asFragment } = render(
      <CategoryCard
        cardCategory={mockCategory}
        onSelectCategory={mockOnSelectCategory}
        selected={false}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot when selected is true', () => {
    const { asFragment } = render(
      <CategoryCard
        cardCategory={mockCategory}
        onSelectCategory={mockOnSelectCategory}
        selected={true}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
