import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { 
  Bell, 
  ChevronLeft, 
  ChevronRight, 
  Dumbbell,
  Utensils,
  Moon,
  X,
} from 'lucide-react';
import Navbar from '../Navbar'; 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
        <div className="relative bg-gray-900 rounded-lg p-6 max-w-2xl w-full">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-200">
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
  const [selectedDays, setSelectedDays] = useState([]);
  const [workoutPlan, setWorkoutPlan] = useState(null); // State for today's workout plan

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

  const generateWorkout = () => {
    const today = new Date();
    const dayOfMonth = today.getDate(); 
    const plan = exercisePlan[0]

    if (plan) {
      setWorkoutPlan(plan);
    } else {
      setWorkoutPlan(null);
      alert("No workout plan available for today.");
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <header className="bg-themeRed text-gray-100 p-5 py-10 z-20">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-6">
            <span className="text-gray-300 text-lg">DAY 2, WEEK 6</span>
            <span className="font-semibold text-lg text-gray-300">Today, 7th June, 2018</span>
            <ChevronLeft className="w-8 h-8 text-gray-300" />
            <ChevronRight className="w-8 h-8 text-gray-300" />
            <Bell className="w-6 h-6 text-gray-300" />
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <Navbar className="w-64 bg-gray-800 text-gray-100" onCalendarClick={() => setIsCalendarOpen(true)} />

        <main className="flex-1 bg-gray-800 p-4">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-100 p-4">Your Progress</h2>
            <div className="grid grid-cols-3 p-4 gap-6">
              <div 
                className="bg-gray-700 rounded-lg p-6 cursor-pointer hover:bg-gray-600 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-4xl font-bold text-gray-200">10 Days</p>
                    <p className="text-lg text-gray-200">Exercises</p>
                    <p className="text-sm text-gray-200">5 hour 50 minutes</p>
                  </div>
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-themeRed font-bold">
                    <Dumbbell className="w-10 h-10" />
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 ">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-4xl font-bold text-gray-200">6</p>
                    <p className="text-lg text-gray-200">Meals</p>
                    <p className="text-sm text-gray-200">1600 kcal</p>
                  </div>
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-themeRed font-bold">
                    <Utensils className="w-10 h-10" />
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 ">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-4xl font-bold text-gray-200">7h 40m</p>
                    <p className="text-lg text-gray-200">Average Sleep</p>
                    <p className="text-sm text-gray-200">Perfect Quality</p>
                  </div>
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-themeRed font-bold">
                    <Moon className="w-10 h-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg">
              <button 
                onClick={generateWorkout}
                className="bg-themeRed text-white py-2 px-4 rounded-lg text-xl"
              >
                Generate Today's Workout
              </button>
            </div>
            
            {workoutPlan && (
              <div className="m-4 p-4 bg-gray-700 rounded-lg w-1/2">
                <h2 className="text-2xl font-semibold text-gray-200 mb-4">Today's Workout</h2>
                <ul className="space-y-2">
                  {workoutPlan.exercises.map((exercise, index) => (
                    <li key={index} className="flex justify-between text-lg text-gray-300">
                      <span>{exercise.name}</span>
                      <span>{exercise.sets} sets, {exercise.reps} reps</span>
                    </li>
                  ))}
                </ul>
                <div className='my-4'>
                <a 
                className="bg-themeRed text-white py-2 px-4 rounded-lg text-xl"
                href='https://www.google.com/'
                target='_blank'
              >
                Start Workout
              </a>
              </div>

              </div>
            )}
          </div>
        </main>
      </div>

      <Modal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)}>
        <DayPicker 
          mode="multiple" 
          selected={selectedDays}
          onDayClick={handleDayClick}
        />
      </Modal>
    </div>
  );
}
