import { NextResponse } from "next/server"

const fairData = [
  { id: 1, name: "Food Court", type: "Food Court", description: "Various food vendors", lat: 51.505, lng: -0.09 },
  { id: 2, name: "Ferris Wheel", type: "Ride", description: "Classic fair ride", lat: 51.5052, lng: -0.0905 },
  { id: 3, name: "Game Alley", type: "Game", description: "Carnival games", lat: 51.5048, lng: -0.0898 },
  {
    id: 4,
    name: "Art Exhibition",
    type: "Exhibition",
    description: "Local artists showcase",
    lat: 51.5055,
    lng: -0.0895,
  },
  {
    id: 5,
    name: "Live Music Stage",
    type: "Entertainment",
    description: "Performances throughout the day",
    lat: 51.5047,
    lng: -0.0907,
  },
  { id: 6, name: "Petting Zoo", type: "Attraction", description: "Friendly farm animals", lat: 51.5053, lng: -0.0912 },
  { id: 7, name: "Carousel", type: "Ride", description: "Merry-go-round", lat: 51.5045, lng: -0.0903 },
  { id: 8, name: "Cotton Candy Stand", type: "Food Court", description: "Sweet treats", lat: 51.5051, lng: -0.0897 },
  { id: 9, name: "Fun House", type: "Attraction", description: "Mirrors and obstacles", lat: 51.5049, lng: -0.0909 },
  { id: 10, name: "Balloon Darts", type: "Game", description: "Pop balloons to win", lat: 51.5046, lng: -0.0901 },
]

export async function GET() {
  return NextResponse.json(fairData)
}

