export default function Footer() {
  return (
    <footer className="px-20 py-10 flex justify-center items-center divide-x divide-gray-800">
      <div className="flex w-full px-10 py-10 space-x-20">
        <span className="text-2xl font-semibold">CN</span>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Latest blog post</h1>
          <p>Ready to get started?</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            accusantium nulla dolorum doloremque sunt magnam dignissimos ratione
            reprehenderit! Officia veritatis perspiciatis doloremque cupiditate.
            Non, itaque quas reiciendis repudiandae inventore ea!
          </p>
        </div>
      </div>
      <div className="w-4/5 px-20 grid place-items-start">
        <div className="py-10 flex gap-20">
          <div>
            <p className="mb-4">Products</p>
            <ul>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
            </ul>
          </div>
          <div>
            <p className="mb-4">Company</p>
            <ul>
              <li>Company</li>
              <li>Company</li>
              <li>Company</li>
              <li>Company</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <span>© 2010 — 2020</span>
          <span>Privacy — Terms</span>
        </div>
      </div>
    </footer>
  );
}
