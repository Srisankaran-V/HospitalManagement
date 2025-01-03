import { useState, useEffect } from "react";

const AppointmentSchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");

  const doctor = {
    name: "Dr. Smith",
    specialization: "Cardiologist",
    experience: "15 years",
    image: "../src/assets/images/profilePic.png",
  };

  const generateSlots = (selectedDate = new Date()) => {
    const slots = [];
    const startHour = 8;
    const endHour = 20;
    const startMinutes = [30, 0];
    const now = new Date();
    const isToday = selectedDate.toDateString() === now.toDateString();
    const cutoffHour = isToday ? now.getHours() + 1 : startHour;

    for (let hour = startHour; hour <= endHour; hour++) {
      startMinutes.forEach((minute) => {
        if (hour > cutoffHour || (hour === cutoffHour && minute > now.getMinutes())) {
          slots.push(`${hour}:${minute.toString().padStart(2, "0")}`);
        }
      });
    }
    return slots;
  };

  useEffect(() => {
    const slots = generateSlots(selectedDate);
    setAvailableSlots(slots.filter((slot) => !bookedSlots.some((b) => b.date === selectedDate.toDateString() && b.slot === slot)));
  }, [bookedSlots, selectedDate]);

  const handleBookSlot = (slot) => {
    setSelectedSlot(slot);
  };

  const handleConfirmAppointment = () => {
    if (selectedSlot) {
      setBookedSlots([...bookedSlots, { date: selectedDate.toDateString(), slot: selectedSlot }]);
      setSelectedSlot("");
    } else {
      alert("Please select a slot to confirm the appointment.");
    }
  };

  const handleDateChange = (daysToAdd) => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + daysToAdd);
    setSelectedDate(newDate);
    setSelectedSlot("");
  };

  const getSortedAppointments = () => {
    return [...bookedSlots].sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.slot}`);
      const dateB = new Date(`${b.date} ${b.slot}`);
      return dateA - dateB;
    });
  };

  return (
    <>
      <div className="px-4 py-10">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Book an Appointment
        </h2>
        <div className="flex justify-between gap-4">
          

          {/* Available Slots Section */}
          <div className="w-2/3 bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Left Section */}
              <div className="md:col-span-1 flex flex-col items-center space-y-2">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="object-contain w-30 h-48 md:w-60 md:h-60 object-cover rounded-lg shadow-md"
                />
                <h2 className="text-lg font-bold text-gray-800">{doctor.name}</h2>
                <p className="text-gray-600">{doctor.specialization}</p>
                <p className="text-gray-500">{doctor.experience} of experience</p>
              </div>

              {/* Right Section */}
              <div className="md:col-span-4">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">Book an Appointment</h2>
                  <div className="flex space-x-2 overflow-x-auto">
                    {[...Array(7)].map((_, index) => {
                      const date = new Date();
                      date.setDate(date.getDate() + index);
                      const isSelected = selectedDate.toDateString() === date.toDateString();
                      return (
                        <button
                          key={index}
                          className={`px-4 py-2 rounded text-sm ${
                            isSelected
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                          }`}
                          onClick={() => handleDateChange(index)}
                        >
                          {date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">Available Slots</h2>
                  <div className="flex max-w-[48rem] space-x-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
                    {availableSlots.length > 0 ? (
                      availableSlots.map((slot, index) => (
                        <button
                          key={index}
                          className={`px-4 py-2 rounded text-sm ${
                            selectedSlot === slot
                              ? "bg-yellow-500 text-white"
                              : "bg-green-500 text-white hover:bg-green-600"
                          }`}
                          onClick={() => handleBookSlot(slot)}
                        >
                          {slot}
                        </button>
                      ))
                    ) : (
                      <p className="text-gray-500">No slots available for this day.</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    className="flex max-w-80 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleConfirmAppointment}
                  >
                    Confirm Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Booked Slots Section */}
          <div className="w-1/3 bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Booked Appointments</h2>
            {bookedSlots.length > 0 ? (
              <ul className="space-y-2 p-4 rounded-lg">
                {getSortedAppointments().map((appointment, index) => (
                  <li key={index} className="p-2 border bg-red-200 text-center rounded text-sm">
                    {appointment.date} - {appointment.slot}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center">No appointments booked yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentSchedulePage;
