'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mentors = [
  {
    id: 1,
    name: 'William Jones',
    service: 'Visa Assistance',
    appeals: 213,
    experience: 8,
    evaluation: 4.5,
  },
  {
    id: 2,
    name: 'Linda Williams',
    service: 'Preparing Transcripts',
    appeals: 117,
    experience: 5,
    evaluation: 5,
  },
  // Add more mentors as needed
]

export default function MentorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Mentors</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{mentor.name}</h3>
                <p className="text-gray-600">Service: {mentor.service}</p>
                <p className="text-gray-600">Appeals: {mentor.appeals}</p>
                <p className="text-gray-600">Experience: {mentor.experience} years</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < mentor.evaluation ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <Button>Apply</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}