import React from 'react'
import classes from "./Sidebar.module.css"
import { UserButton } from '@clerk/clerk-react'
import { Button, Center, Stack, useMantineColorScheme } from '@mantine/core'
import { IconArrowsJoin, IconMoon, IconPlus, IconSun } from '@tabler/icons-react'
import { useColorScheme } from '@mantine/hooks'

function Sidebar() {
 const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <nav className={classes.navbar}>
      <Stack>
        <Center>
          <Button
            className={classes.link}
            variant="subtle"
            radius={100}
            onClick={()=> console.log("Create new server")}
          >
            <IconPlus radius={100} />
          </Button>
        </Center>
        <Center>
          <Button
            onClick={()=> console.log("OPen Modal")}
            className={classes.link}
            variant="subtle"
            radius={100}
          >
            <IconArrowsJoin radius={100} />
          </Button>
        </Center>
        <Stack justify="center" gap="md" mt="xl">
          {'links'}
        </Stack>
      </Stack>
      <Stack justify="center" align="center">
        <Button
          className={classes.link}
          variant="subtle"
          onClick={toggleColorScheme}
          radius={100}
          p={0}
        >
          {colorScheme === "dark" ? (
            <IconSun radius={100} />
          ) : (
            <IconMoon radius={100} />
          )}
        </Button>
        <UserButton />
      </Stack>
    </nav>
  )
}

export default Sidebar