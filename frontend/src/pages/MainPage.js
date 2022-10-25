import { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Filter from '../components/filter/Filter'
import ContentCard from '../components/content/ContentCard'
import { useFilter } from '../context/FilterContext'
import api from '../services/api'

const Header = styled(Paper)(({ theme }) => ({
  ...theme.typography.h6,
  padding: theme.spacing(1.5),
  [theme.breakpoints.up('lg')]: {
    width: '65%'
  },
  [theme.breakpoints.down('lg')]: {
    width: '90%'
  }
}))

const Content = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  flexWrap: 'wrap',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  overflowY: 'scroll',
  overflowX: 'hidden',
  color: theme.palette.text.secondary,
  background: 'transparent'

}))

const MainPage = () => {
  const { brandData, brand, profile, to, from } = useFilter()

  const [posts, setPosts] = useState([])
  const [pageName, setPageName] = useState('')

  const getId = () => {
    const data = brandData.find(el => el.brandname === brand)
    if (!data) {
      return ''
    }
    return data.profiles.find(el => el.profile_type === profile).id
  }

  const getPageName = () => {
    const data = brandData.find(el => el.brandname === brand)
    if (!data) {
      return ''
    }
    return data.profiles.find(el => el.profile_type === profile).name
  }
  const date = { start: from.valueOf(), end: to.valueOf(), timezone: 'Europe/London' }

  useEffect(() => {
    const getPosts = async () => {
      if (!(brand && profile && to && from)) {
        return
      }
      try {
        const res = await api.getPosts({ id: getId(), profileType: profile, date, size: 10 })
        setPosts(res.data.resp.posts)
        setPageName(getPageName())
      } catch (err) { console.log("couldn't get data:", err) }
    }
    getPosts(posts)
  }, [brand, profile, to, from])

  return (<div display='flex' height='100%' >
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={{ xs: 1, sm: 2, md: 4 }}
    height='100%'
    padding={0.5}
    maxHeight='100vh'
    >
      <Header>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={2}>
            <span>Socials overview</span>
          </Grid>
          <Grid item xs={10}>
            <Filter/>
            {console.log(posts)}
          </Grid>
        </Grid>
      </Header>
      <Content >
        {posts.length > 1
          ? posts.map((post) => <ContentCard platform={profile} pageName={pageName} engagement={post.engagement} media={post.picture} key={post.id} caption={post.caption} />)
          : <Skeleton />}
      </Content>
    </Stack>
  </div>
  )
}
export default MainPage
