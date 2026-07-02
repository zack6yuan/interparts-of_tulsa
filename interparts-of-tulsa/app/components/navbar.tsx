export default function Navbar() {
  return (
    <nav className="flex justify-between w-full p-15 ">
      <h2>Interparts of Tulsa</h2>
      <ul className="flex flex-row gap-6">
        <li>Services</li>
        <li>Specials & Coupons</li>
        <li>Reviews</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}