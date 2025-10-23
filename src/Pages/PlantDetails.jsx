import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import usePlants from '../Hooks/usePlants';
import Loading from '../Components/Loading';
import environmentImg from '../assets/undraw_gardening_3tyw.svg';
import { FaStar } from 'react-icons/fa';

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, loading } = usePlants();

  if (loading) return <Loading />;

  const plant = plants.find(p => String(p.plantId) === String(id));

  if (!plant) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-center p-6">
          <h2 className="text-2xl font-semibold text-green-800">
            Plant not found
          </h2>
          <p className="text-green-600 mt-2">
            We couldn't find that plant. Try another one.
          </p>
        </div>
      </section>
    );
  }

  const {
    plantName,
    category,
    description,
    image,
    price,
    rating,
    availableStock,
    careLevel,
    providerName,
  } = plant;

  const handleSubmit = e => {
    e.preventDefault();
    toast.success('Consultation booked successfully!', {
      position: 'top-right',
      autoClose: 1500,
    });
  };

  return (
    <main className="bg-green-50 min-h-screen pb-16">
      <title>{plantName}</title>
      {/* Top card */}
      <section className="w-11/12 mx-auto px-10 py-10">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image */}
          <div className="h-70 lg:h-full object-cover overflow-hidden relative">
            <img
              src={image}
              alt={plantName}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-green-900">
                    {plantName}
                  </h1>
                  <p className="text-sm text-green-600 mt-1">
                    {category} • {careLevel}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-green-800">${price}</p>
                  <p className="text-sm text-green-600">per plant</p>
                </div>
              </div>

              <p className="text-green-700 mt-6 leading-relaxed">
                {description}
              </p>

              <div className="mt-6 flex items-center gap-6 text-green-800">
                <div className="flex items-center gap-2">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.round(rating)
                            ? 'text-yellow-500'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                    <span className="ml-1 font-medium">{rating}</span>
                  </div>
                </div>

                <div>
                  <span className="font-semibold">Stock:</span>{' '}
                  <span className="text-green-700">{availableStock}</span>
                </div>

                <div>
                  <span className="font-semibold">Provider:</span>{' '}
                  <span className="text-green-700">{providerName}</span>
                </div>
              </div>
            </div>

            {/* CTA area */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="inline-block bg-[#FFEAB5] text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {careLevel}
                </span>
                <span className="ml-3 text-sm text-green-600">
                  Ships in 2–4 days
                </span>
              </div>

              <div className="flex gap-3">
                <button className="px-5 py-2 bg-[#E3B23C] text-white rounded-lg font-semibold hover:bg-[#B97C16] transition cursor-pointer">
                  Add to Cart
                </button>
                <button className="px-5 py-2 border border-[#E3B23C] text-[#D49C2B] rounded-lg font-semibold hover:bg-[#FFEAB5] transition">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto px-10 mt-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 bg-gradient-to-br from-green-200 via-green-300 to-green-300 flex flex-col justify-center">
            <img className="h-50 mb-2" src={environmentImg} alt="" />
            <h2 className="text-2xl md:text-3xl font-bold text-green-900">
              Book Consultation
            </h2>
            <p className="text-green-700 mt-3">
              Need personalized advice for this plant? Book a 15-minute
              consultation with one of our Green Experts - care tips, placement,
              and fertilizing guidance tailored for your space.
            </p>
          </div>

          {/* Right: Form */}
          <div className="p-8 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <div>
                <label className="block text-green-800 font-medium mb-2">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-green-800 font-medium mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Book Now
                </button>
              </div>

              <p className="text-sm text-green-600 text-center mt-2">
                We will contact you at the provided email to confirm the
                appointment.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlantDetails;
