import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "A",
    allDay: true,
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0),
  },
  {
    title: "B",
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0),
  },
  {
    title: "C",
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0),
  },
];

function App() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="App conainer">
      <h1>
        Calendar Application for{" "}
        <span className="text-slate-500 hover:text-blue-600 font-bold">
          PITON TASK
        </span>
      </h1>
      <p className="p-1">
        Desing By{" "}
        <span className="text-slate-500 hover:text-blue-600 font-bold">
          Mertcan POLAT
        </span>
      </p>
      <h2>Add New Event</h2>
      <div>
        <input
          className=" border border-gray-300 px-12 py-1 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
          type="text"
          placeholder="Add Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          className=" border border-gray-300 px-12 py-1 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
          placeholderText="Start Date"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          className=" border border-gray-300 px-12 py-1 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button
          className="rounded-full text-white py-2 px-8 uppercase text-xs font-bold shadow-lg cursor-pointert m-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={handleAddEvent}
        >
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default App;
