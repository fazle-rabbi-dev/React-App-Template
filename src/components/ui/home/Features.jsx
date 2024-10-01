import { features } from "@/lib/constants"

export const Features = () => {
  return (
    <section className="mt-6">
      <ul className="space-y-4">
        {
          features.map(({ title, description, icon }) => (
              <li className="bg-white-50 rounded-2xl p-5">
                <span className="inline-block bg-white-60 p-3 rounded-lg text-2xl">{icon}</span>
                <h2 className="mt-4 mb-2 heading5">{title}</h2>
                <p className="body-text">
                  {description}
                </p>
              </li>
            ))
        }
      </ul>
    </section>
  )
}

