import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import usePlants from '../Hooks/usePlants';
import Loading from '../Components/Loading';
import { FaStar, FaLeaf, FaSun, FaTint, FaPaw } from 'react-icons/fa';

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, loading } = usePlants();

  if (loading) return <Loading />;

  const plant = plants.find(p => String(p.plantId) === String(id));

  if (!plant) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-green-50">
        <h2 className="text-2xl font-semibold text-green-800">
          Plant not found
        </h2>
      </section>
    );
  }

  const {
    plantName,
    scientificName,
    category,
    description,
    image,
    galleryImages = [],
    price,
    discountPrice,
    rating,
    reviewsCount,
    availableStock,
    careLevel,
    waterSchedule,
    sunlightRequirement,
    temperatureRange,
    petFriendly,
    potSize,
    soilType,
    origin,
    benefits = [],
    careTips = [],
    providerName,
    providerLocation,
    shippingTime,
    returnPolicy,
  } = plant;

  const handleSubmit = () => {
    toast.success('Added to Cart!', { autoClose: 1200 });
  };

  return (
    <main className="bg-green-50 min-h-screen pb-12">
      <title>{plantName}</title>

      {/* Hero Section */}
      <section className="w-11/12 mx-auto py-10 grid lg:grid-cols-2 gap-10">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <img
            src={image}
            alt={plantName}
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-green-900">
            {plantName}
          </h1>
          <p className="italic text-green-700">{scientificName}</p>
          <p className="text-sm text-green-600 mt-2">
            {category} • {careLevel}
          </p>
          <p className="text-sm text-green-600 mt-2">
            Origin • {origin}
          </p>
          <p className="text-sm text-green-600 mt-2">
            Temperature Range • {temperatureRange}
          </p>
          <p className="text-sm text-green-600 mt-2">
            Pot Size • {potSize}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(rating) ? 'text-yellow-500' : 'text-gray-300'
                }
              />
            ))}
            <span className="font-medium text-green-800">
              {rating} ({reviewsCount} reviews)
            </span>
          </div>

          {/* Pricing */}
          <div className="mt-4">
            <p className="text-3xl font-bold text-green-900 flex items-center gap-3">
              ${discountPrice ?? price}
              {discountPrice && (
                <span className="line-through text-green-500 text-xl">
                  ${price}
                </span>
              )}
            </p>
          </div>

          {/* Stock */}
          <p className="mt-2 text-green-700">
            Available Stock:{' '}
            <span className="font-semibold">{availableStock}</span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-green-700 text-white rounded-xl shadow hover:bg-green-800 font-semibold transition"
            >
              Add to Cart
            </button>

            <button className="px-6 py-3 border border-green-700 text-green-700 rounded-xl hover:bg-green-100 font-semibold transition">
              Save
            </button>
          </div>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="w-11/12 mx-auto grid md:grid-cols-4 gap-6 mt-10">
        <div className="p-5 bg-white shadow rounded-xl flex flex-col gap-2">
          <FaTint className="text-green-700 text-xl" />
          <h3 className="font-semibold text-green-900">Watering</h3>
          <p className="text-green-700">{waterSchedule}</p>
        </div>

        <div className="p-5 bg-white shadow rounded-xl flex flex-col gap-2">
          <FaSun className="text-yellow-500 text-xl" />
          <h3 className="font-semibold text-green-900">Sunlight</h3>
          <p className="text-green-700">{sunlightRequirement}</p>
        </div>

        <div className="p-5 bg-white shadow rounded-xl flex flex-col gap-2">
          <FaLeaf className="text-green-700 text-xl" />
          <h3 className="font-semibold text-green-900">Soil</h3>
          <p className="text-green-700">{soilType}</p>
        </div>

        <div className="p-5 bg-white shadow rounded-xl flex flex-col gap-2">
          <FaPaw
            className={`text-xl ${
              petFriendly ? 'text-green-700' : 'text-red-500'
            }`}
          />
          <h3 className="font-semibold text-green-900">Pet Friendly</h3>
          <p className="text-green-700">{petFriendly ? 'Yes' : 'No'}</p>
        </div>
      </section>

      {/* Description */}
      <section className="w-11/12 mx-auto mt-12">
        <h2 className="text-2xl font-bold text-green-900">About {plantName}</h2>
        <p className="mt-3 text-green-700 leading-relaxed">{description}</p>
      </section>

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="w-11/12 mx-auto mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Benefits</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {benefits.map((b, idx) => (
              <li
                key={idx}
                className="p-4 bg-white shadow rounded-lg text-green-700"
              >
                • {b}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Care Tips */}
      {careTips.length > 0 && (
        <section className="w-11/12 mx-auto mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Care Tips</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {careTips.map((tip, idx) => (
              <li
                key={idx}
                className="p-4 bg-white shadow rounded-lg text-green-700"
              >
                ✓ {tip}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="w-11/12 mx-auto mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-xl shadow-md h-52 w-full object-cover hover:scale-105 transition"
              />
            ))}
          </div>
        </section>
      )}

      {/* Provider Info */}
      <section className="w-11/12 mx-auto mt-12 p-6 bg-green-100 rounded-xl shadow">
        <h3 className="text-xl font-bold text-green-900 mb-2">Provided By</h3>
        <p className="text-green-700">{providerName}</p>
        <p className="text-green-700">{providerLocation}</p>

        <p className="mt-4 text-sm text-green-700">
          🌿 Shipping: {shippingTime}
        </p>
        <p className="text-sm text-green-700">
          ↩ Return Policy: {returnPolicy}
        </p>
      </section>
    </main>
  );
};

export default PlantDetails;
