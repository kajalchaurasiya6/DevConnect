import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { vi } from 'vitest';
const mockToggleSidebar = vi.fn();
    describe('Navbar Component', () => {
    it('should display the title when isOpen is false', () => {
        render(<Navbar isOpen={false} toggleSidebar={mockToggleSidebar} />);
        expect(screen.getByText('Dev Connect')).toBeInTheDocument();
    });

    it('should not display the title when isOpen is true', () => {
        render(<Navbar isOpen={true} toggleSidebar={mockToggleSidebar} />);
        const title = screen.queryByText('Dev Connect');
        expect(title).not.toBeInTheDocument();
    });

    it('should render all action icons', () => {
        render(<Navbar isOpen={false} toggleSidebar={mockToggleSidebar} />);
        // Based on roles/icons since they are decorative, we query by their `title` or tag
        expect(screen.getByTitle('Theme Toggle')).toBeInTheDocument();
        expect(screen.getByTitle('User Profile')).toBeInTheDocument();
        expect(screen.getByTitle('Logout')).toBeInTheDocument();
    });
});
