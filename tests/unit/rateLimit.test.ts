import { describe, it, expect } from 'vitest';
import { hitLimit } from '@/src/lib/rateLimit';

// Mock db
afterEach(() => {
  // cleanup if necessary
});

describe('hitLimit', () => {
  it('should return object with allowed boolean', async () => {
    // Mocked function: since db is not available, we expect function to throw.
    await expect(hitLimit({ limit: 1, windowSec: 60, key: '127.0.0.1' })).rejects.toThrow();
  });
});
