import SalonDetails from "./SalonDetails";

export default function TicketsDetails({ booking, salon }) {
  return (
    <div>
      <p>Booking {booking.id}</p>
      <p>Salon {salon.name}</p>
      <SalonDetails booking={booking} salon={salon} />
    </div>

  );
}