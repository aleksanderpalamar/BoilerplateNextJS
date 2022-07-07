/* eslint-disable react/no-children-prop */
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea
} from '@chakra-ui/react'
import {MdPhone, MdEmail, MdLocationOn, MdOutlineEmail} from 'react-icons/md'
import {
  BsGithub,
  BsDiscord,
  BsPerson,
  BsLinkedin,
  BsWhatsapp
} from 'react-icons/bs'
import $ from 'jquery'
import ReactGA from 'react-ga'
import {Component} from 'react'

export class Contato extends Component {
  sendMessage = async () => {
    let name: any = $('#sender-name').val()
    let email: any = $('#sender-email').val()
    let subject: any = $('#sender-subject').val()
    let message: any = $('#sender-message').val()

    name = name.toString().trim()
    email = email.toString().trim()
    subject = subject.toString().trim()
    message = message.toString().trim()

    let error = false

    if (name.length === 0) {
      $('#sender-name').val('')
      $('#sender-name').attr('placeholder', 'O nome não deve estar vazio!')
      error = true
    }

    if (email.length === 0) {
      $('#sender-email').val('')
      $('#sender-email').attr('placeholder', 'O email não deve estar vazio!')
      error = true
    }

    if (subject.length === 0) {
      $('#sender-subject').val('')
      $('#sender-subject').attr(
        'placeholder',
        'O assunto não deve estar vazio!'
      )
      error = true
    }

    if (message.length === 0) {
      $('#sender-message').val('')
      $('#sender-message').attr(
        'placeholder',
        'O mensagem não deve estar vazia!'
      )
      error = true
    }
    if (error) return

    this.setState({sending: true})
    await fetch('https://formspree.io/f/mayvbreg', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message
      })
    })
      .then(() => {
        this.setState({sending: false})
      })
      .catch((error) => {
        console.log(error)
      })

    ReactGA.event({
      category: 'Send Message',
      action: `${name}, ${email}, ${subject}, ${message}`
    })

    $('#sender-name').val('')
    $('#sender-email').val('')
    $('#sender-subject').val('')
    $('#sender-message').val('')

    alert('Mensagem enviada com sucesso! 🤗🐧👨‍💻')
  }
  render() {
    return (
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            id="Contato"
            bg="gray.900"
            color="white"
            borderRadius="lg"
            m={{sm: 4, md: 16, lg: 10}}
            p={{sm: 5, md: 5, lg: 16}}
            aria-label="Formulário de Contato"
          >
            <Box p={4}>
              <Wrap spacing={{base: 20, sm: 3, md: 5, lg: 20}}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{sm: 3, md: 3, lg: 5}} color="gray.500">
                      Fill in the form to get in touch with me.
                    </Text>
                    <Box py={{base: 5, sm: 5, md: 8, lg: 10}}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Box
                          as="button"
                          type="button"
                          display="flex"
                          gap="2"
                          alignItems="center"
                          justifyContent="center"
                          height="48px"
                          width="200"
                          color="#DCE2FF"
                          _hover={{
                            border: '2px solid #8257e5',
                            borderRadius: 'md'
                          }}
                          aria-label="Telefone"
                        >
                          <MdPhone color="#8257e5" size="20px" />
                          +55 (41) 98793-8328
                        </Box>
                        <Box
                          as="button"
                          type="button"
                          display="flex"
                          gap="2"
                          alignItems="center"
                          justifyContent="center"
                          height="48px"
                          width="200"
                          color="#DCE2FF"
                          _hover={{
                            border: '2px solid #8257e5',
                            borderRadius: 'md'
                          }}
                          aria-label="Email"
                        >
                          <MdEmail color="#8257e5" size="20px" />
                          palamar@palamarsolutionit.com.br
                        </Box>
                        <Box
                          as="button"
                          type="button"
                          display="flex"
                          gap="2"
                          alignItems="center"
                          justifyContent="center"
                          height="48px"
                          width="200"
                          color="#DCE2FF"
                          _hover={{
                            border: '2px solid #8257e5',
                            borderRadius: 'md'
                          }}
                          aria-label="Localização"
                        >
                          <MdLocationOn color="#8257e5" size="20px" />
                          Brasil, Curitiba/PR
                        </Box>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{lg: 10, md: 10}}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                      aria-label="Redes Sociais"
                    >
                      <IconButton
                        aria-label="linkedin"
                        as="a"
                        href="https://www.linkedin.com/in/aleksanderpalamar/"
                        target="_blank"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{bg: 'purple.500'}}
                        icon={<BsLinkedin size="28px" />}
                      />
                      <IconButton
                        as="a"
                        href="https://github.com/aleksanderpalamar"
                        target="_blank"
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{bg: 'purple.500'}}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        as="a"
                        href="https://wa.me/message/YDH52TKJPPF5I1"
                        target="_blank"
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{bg: 'purple.500'}}
                        icon={<BsWhatsapp size="28px" />}
                      />
                      <IconButton
                        as="a"
                        href="https://discord.gg/dPJTb6eKG6"
                        target="_blank"
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{bg: 'purple.500'}}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="gray.950">
                      <VStack spacing={5}>
                        <FormControl id="sender-name">
                          <FormLabel>Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              focusBorderColor="purple.500"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="sender-email">
                          <FormLabel>E-mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              focusBorderColor="purple.500"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="sender-subject">
                          <FormLabel>Subject</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="text"
                              size="md"
                              focusBorderColor="purple.500"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="sender-message">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300'
                            }}
                            placeholder="Message"
                            focusBorderColor="purple.500"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            colorScheme="purple"
                            bg="purple.500"
                            color="white"
                            _hover={{
                              bg: 'purple.600'
                            }}
                            onClick={this.sendMessage}
                          >
                            Enviar
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    )
  }
}