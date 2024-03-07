// ********RoostGPT********
// Test generated by RoostGPT for test ReactTesting using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
import React from 'react';
import { render, screen } from '@testing-library/react';
import Credit from '../../components/Credit';

describe('Credit Component', () => {
  test('renders without crashing', () => {
    render(<Credit />);
    expect(screen.getByText('Coded by')).toBeInTheDocument();
  });

  test('contains a link to the developer\'s profile', () => {
    render(<Credit />);
    const devProfileLink = screen.getByRole('link', { name: 'Chaimae Lamirine' });
    expect(devProfileLink.href).toBeTruthy();
    expect(devProfileLink.href).toBe('https://www.shecodes.io/graduates/73033-chaimae-lamirine');
  });

  test('contains a link to the Github repository', () => {
    render(<Credit />);
    const githubLink = screen.getByRole('link', { name: 'Open sourced on Github.' });
    expect(githubLink.href).toBeTruthy();
    expect(githubLink.href).toBe('https://github.com/shemmee/React-Weather-App');
  });

  // If there were more interactive elements or varied states, we would include more tests here.
  // Additional tests could include checking for proper accessibility attributes,
  // ensuring that props are being correctly used and result in the expected output, etc.
});

