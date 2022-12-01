import Head from "next/head";
import Image from "next/image";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Button, Heading, Text, Icon, Box, Flex } from '@chakra-ui/react'
import { Logo, Github, Google } from '../styles/icons'
import EmptyState from "../components/EmptyState";


export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = session?.user.user_metadata;
  return (
    <Flex direction="column" align="center" justify="center" h="100vh">

        <Heading>
        </Heading>

        <Icon as={Logo} w={10} h={10} />  

        <Box as="main">
          {!session ? (
              <Button mt={4} leftIcon={<Github />} onClick={() => supabase.auth.signInWithOAuth({ provider: "github" })}>Sign in with GitHub</Button>
          ) : (
            <>            
            <Text mt={4} >Logged in as {user.email}</Text>
            <Button mt={4} onClick={() => supabase.auth.signOut()}>Sign out</Button>
            <EmptyState />  
            </> 
          )}
        </Box>

      <footer>
      </footer>
    </Flex>
  );
}