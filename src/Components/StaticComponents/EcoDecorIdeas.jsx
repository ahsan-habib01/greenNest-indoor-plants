import React from 'react';

const ideas = [
  {
    id: 1,
    title: 'Minimalist Plant Corner',
    description:
      'Create a calm vibe with sleek pots and a few statement plants like Monstera or Fiddle Leaf Fig.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Hanging Garden Magic',
    description:
      'Use macrame hangers and trailing plants to add life to your ceiling or window space.',
    image:
      'https://images.unsplash.com/photo-1644129800312-ba5e4677ed86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025',
  },
  {
    id: 3,
    title: 'Work Desk Greens',
    description:
      'Small succulents or air plants brighten your workspace and boost creativity naturally.',
    image:
      'https://images.unsplash.com/photo-1557681653-e7f58f1e3043?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
];

const EcoDecorIdeas = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-900">Eco Decor Ideas</h2>
        <p className="text-green-700 mt-2">
          Stylish ways to bring nature’s calm into your everyday spaces
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {ideas.map(idea => (
          <div
            key={idea.id}
            className="bg-[#FFEAB5] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={idea.image}
              alt={idea.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {idea.title}
              </h3>
              <p className="text-green-700 text-sm">{idea.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcoDecorIdeas;
