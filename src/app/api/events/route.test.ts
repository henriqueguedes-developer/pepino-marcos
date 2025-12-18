import { GET, POST } from './route';
import { NextRequest } from 'next/server';


function mockRequest(method: string, url: string, body?: Record<string, unknown>) {

  const headers = new Headers();
  if (body) {
    headers.set('Content-Type', 'application/json');
  }

  return new NextRequest(url, { 
    method, 
    headers,
    body: body ? JSON.stringify(body) : undefined 
  });
}

describe('API Events Routes', () => {
  it('GET /api/events should return a list of events', async () => {
    const request = mockRequest('GET', 'http://localhost:3000/api/events');
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(Array.isArray(data.data)).toBe(true);
    expect(data.data.length).toBeGreaterThan(0);
  });

  it('POST /api/events should create a new event', async () => {
    const newEvent = {
      title: 'Evento Teste',
      location: 'Local Teste',
      date: '2025-12-25',
      category: 'Teste',
    };

    const request = mockRequest('POST', 'http://localhost:3000/api/events', newEvent);
    const response = await POST(request);
    const createdEvent = await response.json();

    expect(response.status).toBe(201);
    expect(createdEvent).toMatchObject(newEvent);
    expect(createdEvent).toHaveProperty('id');
  });
});
