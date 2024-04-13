export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const response = await fetch(`https://uselection.togatech.org/api/votes`);
    const {data} = await response.json();
    console.log(data);
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error(error);
    return new Response('GET Properties failed');
  }
}

export async function POST(request: Request) {
  return new Response('properties');
}

export async function PUT(request: Request) {
  return new Response('properties');
}

export async function DELETE(request: Request) {
  return new Response('properties');
}

export async function PATCH(request: Request) {
  return new Response('properties');
}