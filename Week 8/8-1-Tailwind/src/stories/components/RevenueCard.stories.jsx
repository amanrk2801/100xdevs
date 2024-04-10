import React from 'react';
import { RevenueCard } from '../../components/RevenueCard';

export default {
  title: 'Components/RevenueCard',
  component: RevenueCard,
};

// Story 1: Default state
export const Default = () => (
  <RevenueCard title="Revenue" amount="1000" />
);

// Story 2: With order count
export const WithOrderCount = () => (
  <RevenueCard title="Revenue" amount="1000" orderCount={5} />
);

// Story 3: With warning
export const WithWarning = () => (
  <RevenueCard title="Revenue" amount="1000" showWarning />
);
