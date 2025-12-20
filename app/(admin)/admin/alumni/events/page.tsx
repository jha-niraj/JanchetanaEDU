"use client"

import { useState, useEffect, useTransition } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
    Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    getAllEvents, createEvent, updateEvent, deleteEvent, type Event
} from "@/actions/event.action"
import { useRouter } from "next/navigation"
import {
    Loader2, Calendar, Trash2, Edit, Plus
} from "lucide-react"
import { format } from "date-fns"
import {
    Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import {
    Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle
} from "@/components/ui/sheet"
import { toast } from "sonner"

export default function AlumniEventsPage() {
    const [events, setEvents] = useState<Event[]>([])
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [isEditSheetOpen, setIsEditSheetOpen] = useState(false)
    const [selectedEventId, setSelectedEventId] = useState<string | null>(null)
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const [currentTab, setCurrentTab] = useState("create")

    const [newEvent, setNewEvent] = useState({
        title: "",
        description: "",
        date: "",
        location: "",
        isActive: true,
    })

    const selectedEvent = events.find(e => e.id === selectedEventId)

    useEffect(() => {
        async function fetchEvents() {
            const result = await getAllEvents()
            if (result.success) {
                const alumniEvents = (result.events || []).filter(e => e.eventType === 'ALUMNI')
                setEvents(alumniEvents)
            } else {
                toast("Error", {
                    description: result.error || "Failed to fetch events.",
                })
            }
        }
        fetchEvents()
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setNewEvent({
            ...newEvent,
            [id]: id === "isActive" ? (e.target as HTMLInputElement).checked : value,
        })
    }

    const handleCreateEvent = () => {
        if (!newEvent.title.trim() || !newEvent.description.trim() || !newEvent.date) {
            toast("Validation Error", {
                description: "Title, description, and date are required.",
            })
            return
        }

        startTransition(async () => {
            try {
                const result = await createEvent({
                    title: newEvent.title,
                    description: newEvent.description,
                    date: new Date(newEvent.date),
                    location: newEvent.location || undefined,
                    eventType: 'ALUMNI',
                    isActive: newEvent.isActive,
                })

                if (result.success) {
                    if (result.event) {
                        setEvents([result.event, ...events])
                    }
                    setNewEvent({
                        title: "",
                        description: "",
                        date: "",
                        location: "",
                        isActive: true,
                    })
                    setCurrentTab("events")
                    toast("Event Created", {
                        description: "The alumni event has been created successfully.",
                    })
                    router.refresh()
                } else {
                    toast("Error", {
                        description: result.error || "Failed to create event.",
                    })
                }
            } catch (error) {
                console.error("Create event error:", error)
                toast("Error", {
                    description: "Something went wrong. Please try again.",
                })
            }
        })
    }

    const handleDeleteEvent = () => {
        if (!selectedEventId) return

        startTransition(async () => {
            try {
                const result = await deleteEvent(selectedEventId)

                if (result.success) {
                    setEvents(events.filter((event) => event.id !== selectedEventId))
                    toast("Event Deleted", {
                        description: "The event has been removed.",
                    })
                    setSelectedEventId(null)
                    setIsDeleteDialogOpen(false)
                    router.refresh()
                } else {
                    toast("Error", {
                        description: result.error || "Failed to delete event.",
                    })
                }
            } catch (error) {
                console.error("Delete event error:", error)
                toast("Error", {
                    description: "Something went wrong. Please try again.",
                })
            }
        })
    }

    const handleEditClick = (event: Event) => {
        setSelectedEventId(event.id)
        setNewEvent({
            title: event.title,
            description: event.description,
            date: format(new Date(event.date), "yyyy-MM-dd'T'HH:mm"),
            location: event.location || "",
            isActive: event.isActive,
        })
        setIsEditSheetOpen(true)
    }

    const handleUpdateEvent = () => {
        if (!selectedEvent || !newEvent.title.trim() || !newEvent.description.trim() || !newEvent.date) {
            toast("Validation Error", {
                description: "Title, description, and date are required.",
            })
            return
        }

        startTransition(async () => {
            try {
                const result = await updateEvent(selectedEvent.id, {
                    title: newEvent.title,
                    description: newEvent.description,
                    date: new Date(newEvent.date),
                    location: newEvent.location || undefined,
                    isActive: newEvent.isActive,
                })

                if (result.success) {
                    if (result.event) {
                        setEvents(events.map(e => e.id === selectedEvent.id ? result.event! : e))
                    }
                    setIsEditSheetOpen(false)
                    setSelectedEventId(null)
                    setNewEvent({
                        title: "",
                        description: "",
                        date: "",
                        location: "",
                        isActive: true,
                    })
                    toast("Event Updated", {
                        description: "The event has been updated successfully.",
                    })
                    router.refresh()
                } else {
                    toast("Error", {
                        description: result.error || "Failed to update event.",
                    })
                }
            } catch (error) {
                console.error("Update event error:", error)
                toast("Error", {
                    description: "Something went wrong. Please try again.",
                })
            }
        })
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Alumni Events Management</h1>
                <p className="text-muted-foreground">Create and manage alumni events</p>
            </div>
            <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="create">Create Event</TabsTrigger>
                    <TabsTrigger value="events">All Events ({events.length})</TabsTrigger>
                </TabsList>
                <TabsContent value="create" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create New Alumni Event</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Event Title *</Label>
                                <Input
                                    id="title"
                                    value={newEvent.title}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Annual Alumni Reunion"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description *</Label>
                                <Textarea
                                    id="description"
                                    value={newEvent.description}
                                    onChange={handleInputChange}
                                    placeholder="Describe the event..."
                                    className="min-h-[120px]"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="date">Date & Time *</Label>
                                    <Input
                                        id="date"
                                        type="datetime-local"
                                        value={newEvent.date}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <Input
                                        id="location"
                                        value={newEvent.location}
                                        onChange={handleInputChange}
                                        placeholder="e.g. School Campus"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="checkbox"
                                    id="isActive"
                                    checked={newEvent.isActive}
                                    onChange={handleInputChange}
                                    className="rounded"
                                />
                                <Label htmlFor="isActive">Active (visible on website)</Label>
                            </div>
                            <Button onClick={handleCreateEvent} disabled={isPending} className="w-full">
                                {
                                    isPending ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Creating...
                                        </>
                                    ) : (
                                        <>
                                            <Plus className="mr-2 h-4 w-4" />
                                            Create Event
                                        </>
                                    )
                                }
                            </Button>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="events" className="mt-6">
                    {
                        events.length === 0 ? (
                            <Card>
                                <CardContent className="py-12 text-center">
                                    <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                    <p className="text-muted-foreground">No alumni events created yet.</p>
                                </CardContent>
                            </Card>
                        ) : (
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    events.map((event) => (
                                        <motion.div
                                            key={event.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <Card className="h-full">
                                                <CardHeader>
                                                    <div className="flex items-start justify-between">
                                                        <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                                                        <Badge variant={event.isActive ? "default" : "secondary"}>
                                                            {event.isActive ? "Active" : "Inactive"}
                                                        </Badge>
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="space-y-3">
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>{format(new Date(event.date), "MMM d, yyyy 'at' h:mm a")}</span>
                                                    </div>
                                                    {
                                                        event.location && (
                                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                                <span>📍</span>
                                                                <span>{event.location}</span>
                                                            </div>
                                                        )
                                                    }
                                                    <p className="text-sm text-muted-foreground line-clamp-3">{event.description}</p>
                                                    <div className="flex gap-2 pt-2">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => handleEditClick(event)}
                                                            className="flex-1"
                                                        >
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </Button>
                                                        <AlertDialog open={isDeleteDialogOpen && selectedEventId === event.id} onOpenChange={(open) => {
                                                            setIsDeleteDialogOpen(open)
                                                            if (!open) setSelectedEventId(null)
                                                        }}>
                                                            <AlertDialogTrigger asChild>
                                                                <Button
                                                                    variant="destructive"
                                                                    size="sm"
                                                                    onClick={() => {
                                                                        setSelectedEventId(event.id)
                                                                        setIsDeleteDialogOpen(true)
                                                                    }}
                                                                    className="flex-1"
                                                                >
                                                                    <Trash2 className="h-4 w-4 mr-2" />
                                                                    Delete
                                                                </Button>
                                                            </AlertDialogTrigger>
                                                            <AlertDialogContent>
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                                    <AlertDialogDescription>
                                                                        This action cannot be undone. This will permanently delete the event.
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                    <AlertDialogAction onClick={handleDeleteEvent} disabled={isPending}>
                                                                        {
                                                                            isPending ? (
                                                                                <>
                                                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                                    Deleting...
                                                                                </>
                                                                            ) : (
                                                                                "Delete"
                                                                            )
                                                                        }
                                                                    </AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        )
                    }
                </TabsContent>
            </Tabs>
            <Sheet open={isEditSheetOpen} onOpenChange={setIsEditSheetOpen}>
                <SheetContent side="right" className="sm:max-w-2xl overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Edit Alumni Event</SheetTitle>
                        <SheetDescription>Update the event details below.</SheetDescription>
                    </SheetHeader>
                    <div className="space-y-4 mt-6">
                        <div className="space-y-2">
                            <Label htmlFor="edit-title">Event Title *</Label>
                            <Input
                                id="title"
                                value={newEvent.title}
                                onChange={handleInputChange}
                                placeholder="e.g. Annual Alumni Reunion"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="edit-description">Description *</Label>
                            <Textarea
                                id="description"
                                value={newEvent.description}
                                onChange={handleInputChange}
                                placeholder="Describe the event..."
                                className="min-h-[120px]"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="edit-date">Date & Time *</Label>
                                <Input
                                    id="date"
                                    type="datetime-local"
                                    value={newEvent.date}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-location">Location</Label>
                                <Input
                                    id="location"
                                    value={newEvent.location}
                                    onChange={handleInputChange}
                                    placeholder="e.g. School Campus"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type="checkbox"
                                id="isActive"
                                checked={newEvent.isActive}
                                onChange={handleInputChange}
                                className="rounded"
                            />
                            <Label htmlFor="isActive">Active (visible on website)</Label>
                        </div>
                    </div>
                    <SheetFooter className="mt-6">
                        <Button variant="outline" onClick={() => setIsEditSheetOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleUpdateEvent} disabled={isPending}>
                            {
                                isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Updating...
                                    </>
                                ) : (
                                    "Update Event"
                                )
                            }
                        </Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}