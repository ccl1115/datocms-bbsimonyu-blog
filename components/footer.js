import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <p>© 2021 All rights reserved by Simon Yu</p>
        </div>
      </Container>
    </footer>
  )
}
