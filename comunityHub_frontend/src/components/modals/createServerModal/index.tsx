import React from 'react'
import { Button, Flex, Group, Image, Modal, rem, Stack, Text, TextInput } from '@mantine/core';
import { useModal } from '../../../hooks/useModal';
import { useForm } from "@mantine/form"
import classes from "./CreateServerModal.module.css"
import { Dropzone, type DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone"
import { IconUpload, IconX } from "@tabler/icons-react"

function CreateServerModal() {
    const { isOpen, closeModal } = useModal("CreateServer");
    const [imagePreview, setImagePreview] = React.useState<string | null>(null)
    const [file, setFile] = React.useState<File | null>(null)
    // const [createServer, { loading, error }] = useMutation<
    //   CreateServerMutation,
    //   CreateServerMutationVariables
    // >(CREATE_SERVER)
    const form = useForm({
      initialValues: {
        name: '', 
      },
      validate: {
        name: (value) => (!value.trim() && 'Por Favor insira um nome para o servidor'),
      }
    })
    const handleDropzoneChange: DropzoneProps["onDrop"] = (files) => {
      if (files.length === 0) return setImagePreview(null)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      setFile(files[0])
      reader.readAsDataURL(files[0])
    }
  return (
    <Modal title='Criar um Servidor' opened={isOpen} onClose={closeModal}>
      <Text c='dimmed'>Dê uma personalidade ao seu servidor com um nome e uma imagem
          Você sempre poderá alterar isso depois.
      </Text>
      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          <Flex justify='center' align='center' direction={'column'}>
            {!imagePreview && (
               <Dropzone
                onDrop={(files) => {
                  handleDropzoneChange(files)
                }}
                className={classes.dropZone}
                accept={IMAGE_MIME_TYPE}
                mt="md"
              >
                <Group
                  style={{
                    minHeight: rem(100),
                    pointerEvents: "none",
                  }}
                >
                  <Dropzone.Accept>
                    <IconUpload size="3.2rem" stroke={1.5} />
                  </Dropzone.Accept>
                  <Dropzone.Reject>
                    <IconX size="3.2rem" stroke={1.5} />
                  </Dropzone.Reject>
                  <Dropzone.Idle>
                    <IconUpload size="3.2rem" stroke={1.5} />
                  </Dropzone.Idle>
                  <Stack>
                    <Text size="xl" inline>
                      Arraste as imagens aqui ou clique para selecionar os arquivos
                    </Text>
                    <Text size="sm" c="dimmed" inline mt={7}>
                      Carregar um ícone de servidor
                    </Text>
                      {/* {error?.message && !file && (
                      <Text c="red">{error?.message}</Text>
                    )} */}
                  </Stack>
                </Group>

              </Dropzone>
            )}
                        {imagePreview && (
              <Flex pos="relative" w={rem(150)} h={rem(150)} mt="md">
                <>
                  <Button
                    onClick={() => {
                      setImagePreview(null)
                      setFile(null)
                    }}
                    color="red"
                    pos="absolute"
                    style={{
                      zIndex: 1,
                      borderRadius: "50%",
                      padding: 0,
                      width: rem(30),
                      height: rem(30),
                      top: 0,
                      right: 18,
                    }}
                  >
                    <IconX color="white" />
                  </Button>
                  <Image
                    src={imagePreview}
                    width={rem(150)}
                    height={rem(150)}
                    radius={"50%"}
                  />
                </>
              </Flex>
            )}
          </Flex>
              <TextInput
              label="Nome Servidor"
              placeholder="insira o nome do servidor"
              {...form.getInputProps("name")}
              error={form.errors.name}
            />
            <Button
              disabled={!!form.errors.name}
              w={"50%"}
              type="submit"
              variant="gradient"
              mt="md"
            >
              Criar Servidor
            </Button>
        </Stack>
      </form>
    </Modal>
  )
}

export default CreateServerModal;