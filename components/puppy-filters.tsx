"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PuppyFiltersProps {
  ageFilter: string
  setAgeFilter: (value: string) => void
  colorFilter: string
  setColorFilter: (value: string) => void
  availabilityFilter: string
  setAvailabilityFilter: (value: string) => void
  onReset: () => void
}

export function PuppyFilters({
  ageFilter,
  setAgeFilter,
  colorFilter,
  setColorFilter,
  availabilityFilter,
  setAvailabilityFilter,
  onReset,
}: PuppyFiltersProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block">Age</label>
          <Select value={ageFilter} onValueChange={setAgeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All ages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All ages</SelectItem>
              <SelectItem value="8-10">8-10 weeks</SelectItem>
              <SelectItem value="10-12">10-12 weeks</SelectItem>
              <SelectItem value="12+">12+ weeks</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block">Color</label>
          <Select value={colorFilter} onValueChange={setColorFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All colors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All colors</SelectItem>
              <SelectItem value="Red">Red</SelectItem>
              <SelectItem value="Black & Tan">Black & Tan</SelectItem>
              <SelectItem value="Chocolate">Chocolate</SelectItem>
              <SelectItem value="Cream">Cream</SelectItem>
              <SelectItem value="Dapple">Dapple</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block">Availability</label>
          <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All puppies" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All puppies</SelectItem>
              <SelectItem value="available">Available only</SelectItem>
              <SelectItem value="reserved">Reserved only</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" onClick={onReset}>
          Reset Filters
        </Button>
      </div>
    </div>
  )
}
