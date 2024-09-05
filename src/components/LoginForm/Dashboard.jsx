import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { 
  Bell, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Flag, 
  Calendar, 
  Award, 
  BarChart2, 
  Settings,
  Dumbbell,
  Utensils,
  Moon,
  X
} from 'lucide-react';

// Simple Modal component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
        <div className="relative bg-white rounded-lg p-6 max-w-2xl w-full">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

const exercisePlan = [
  {
    day: 1,
    exercises: [
      { name: "Push-ups", sets: 3, reps: 15 },
      { name: "Squats", sets: 3, reps: 20 },
      { name: "Plank", sets: 3, duration: "30 seconds" },
      { name: "Mountain Climbers", sets: 3, reps: 20 },
      { name: "Lunges", sets: 3, reps: 10 },
    ]
  },
  {
    day: 2,
    exercises: [
      { name: "Incline Push-ups", sets: 3, reps: 12 },
      { name: "Crunches", sets: 3, reps: 20 },
      { name: "Dips", sets: 3, reps: 10 },
      { name: "Jump Squats", sets: 3, reps: 15 },
      { name: "Burpees", sets: 3, reps: 10 },
    ]
  }
];

export default function FitnessHomepage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isExercisePlanOpen, setIsExercisePlanOpen] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayClick = (day) => {
    const isSelected = selectedDays.some(selectedDay => 
      selectedDay.getDate() === day.getDate() &&
      selectedDay.getMonth() === day.getMonth() &&
      selectedDay.getFullYear() === day.getFullYear()
    );
    
    if (isSelected) {
      setSelectedDays(selectedDays.filter(selectedDay => 
        selectedDay.getDate() !== day.getDate() ||
        selectedDay.getMonth() !== day.getMonth() ||
        selectedDay.getFullYear() !== day.getFullYear()
      ));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">TRACK FITNESS</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500">DAY 2, WEEK 6</span>
            <span className="font-semibold">Today, 7th June, 2018</span>
            <ChevronLeft className="w-6 h-6 text-gray-400" />
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 text-gray-400" />
            <RotateCcw className="w-6 h-6 text-gray-400" />
          </div>
        </header>

        <div className="flex">
          <aside className="w-1/4 pr-6">
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h2 className="text-center font-semibold">Richard Jones</h2>
              <p className="text-center text-gray-500">Male, 28 years</p>
              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-xs text-gray-500">HEIGHT</p>
                  <p className="font-semibold">185 cm</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">WEIGHT</p>
                  <p className="font-semibold">176 kg</p>
                </div>
              </div>
            </div>
            <nav>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-blue-500"><Home className="w-5 h-5" /><span>Home</span></li>
                <li className="flex items-center space-x-2 text-gray-500"><Flag className="w-5 h-5" /><span>My goals</span></li>
                <li 
                  className="flex items-center space-x-2 text-gray-500 cursor-pointer hover:text-blue-500"
                  onClick={() => setIsCalendarOpen(true)}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-500"><Award className="w-5 h-5" /><span>Achievements</span></li>
                <li className="flex items-center space-x-2 text-gray-500"><BarChart2 className="w-5 h-5" /><span>Statistics</span></li>
                <li className="flex items-center space-x-2 text-gray-500"><Settings className="w-5 h-5" /><span>Settings</span></li>
              </ul>
            </nav>
            <div className="mt-6 bg-blue-500 text-white rounded-lg p-4 text-center">
              <p className="font-semibold">CONGRATULATIONS!</p>
              <p className="text-sm">You have unlocked the Expert level!</p>
            </div>
          </aside>

          <main className="w-3/4">
            <h2 className="text-2xl font-semibold mb-4">Build Muscles</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div 
                className="bg-blue-100 rounded-lg p-4 cursor-pointer hover:bg-blue-200 transition-colors"
                onClick={() => setIsExercisePlanOpen(true)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold">10</p>
                    <p className="text-sm">Exercises</p>
                    <p className="text-xs text-gray-500">1 hour 50 minutes</p>
                  </div>
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-500 font-bold">
                    <Dumbbell className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="bg-red-100 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold">6</p>
                    <p className="text-sm">Meals</p>
                    <p className="text-xs text-gray-500">1600 kcal</p>
                  </div>
                  <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center text-red-500 font-bold">
                    <Utensils className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="bg-green-100 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold">8</p>
                    <p className="text-sm">Sleep</p>
                    <p className="text-xs text-gray-500">8 hours</p>
                  </div>
                  <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-green-500 font-bold">
                    <Moon className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-gray-500">STATISTICS: Last Month</h3>
                <p className="text-sm text-blue-500">DETAILED VIEW</p>
              </div>
              <div className="h-48 bg-gray-200 rounded"></div>
              <div className="flex justify-center space-x-4 mt-4">
                <span className="text-blue-500">● Exercise</span>
                <span className="text-red-500">● Meals</span>
                <span className="text-green-500">● Sleep</span>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Modal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)}>
        <h2 className="text-lg font-medium mb-4">Log Your Workouts</h2>
        <DayPicker
          mode="multiple"
          selected={selectedDays}
          onDayClick={handleDayClick}
          footer={
            <p className="mt-4">
              You've logged {selectedDays.length} workout{selectedDays.length === 1 ? '' : 's'}.
            </p>
          }
        />
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setIsCalendarOpen(false)}
        >
          Close
        </button>
      </Modal>

      <Modal isOpen={isExercisePlanOpen} onClose={() => setIsExercisePlanOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Monthly Exercise Plan</h2>
        <p className="mb-4 text-gray-600">Here's your bodyweight exercise plan for the first two days of the month:</p>
        {exercisePlan.map((day) => (
          <div key={day.day} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Day {day.day}</h3>
            <ul className="list-disc pl-5">
              {day.exercises.map((exercise, index) => (
                <li key={index} className="mb-2">
                  <span className="font-medium">{exercise.name}:</span> {exercise.sets} sets of {exercise.reps || exercise.duration}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="mt-4 text-sm text-gray-600">
          Remember to warm up before exercising and cool down afterwards. Stay hydrated and listen to your body.
        </p>
      </Modal>
    </div>
  );
}