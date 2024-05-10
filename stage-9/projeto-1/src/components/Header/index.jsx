import { Container, Logout, Profile } from "./styles"
import { RiShutDownLine } from "react-icons/ri"

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/felipe086.png" alt="Foto do usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>Felipe</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
