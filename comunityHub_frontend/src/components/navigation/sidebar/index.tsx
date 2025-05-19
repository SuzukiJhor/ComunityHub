import React from 'react'
import classes from "./Sidebar.module.css"
import { UserButton } from '@clerk/clerk-react'
import { Button, Center, Stack } from '@mantine/core'
import { IconArrowsJoin, IconMoon, IconPlus, IconSun } from '@tabler/icons-react'
import { useColorScheme } from '@mantine/hooks'

function Sidebar() {
 const colorScheme = useColorScheme();
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
          onClick={()=> console.log("Toggle theme")}
          radius={100}
          p={0}
        >
          {colorScheme === "dark" ? (
            <IconMoon radius={100} />
          ) : (
            <IconSun radius={100} />
          )}
        </Button>
        <UserButton />
      </Stack>
    </nav>
  )
}

export default Sidebar