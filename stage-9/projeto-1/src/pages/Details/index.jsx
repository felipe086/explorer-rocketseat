import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Container, Links, Content } from "./styles"

export function Details() {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Content>
            <ButtonText title="Excluir Nota" />

            <h1>Introdução ao React</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ratione ea
              temporibus reprehenderit cupiditate in tenetur minus illo officia omnis deserunt, est
              quos commodi aut et accusamus odit? Eligendi nostrum nemo, exercitationem delectus
              unde quidem? Ut, quisquam cum. Voluptatibus, adipisci.
            </p>

            <Section title="Links úteis">
              <Links>
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">Github</a>
                </li>
              </Links>
            </Section>
            <Section title="Marcadores">
              <Tag title="Express" />
              <Tag title="Express" />
            </Section>
            <Button title="Salvar" />
          </Content>
        </main>
      </Container>
    </>
  )
}
